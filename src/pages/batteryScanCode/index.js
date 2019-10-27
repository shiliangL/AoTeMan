import Taro, { Component } from '@tarojs/taro';
import { AtButton } from 'taro-ui'
import { View, Image, ScrollView } from '@tarojs/components';
import './index.scss';

import scanCodeBorderImg from '../../assets/battery/icon/scanCode.png'
import productImg from '../../assets/battery/icon/cp.png'

var BatteryUUID = "000018f0-0000-1000-8000-00805f9b34fb";
var WriteCharacteristicGuid = "00002af1-0000-1000-8000-00805f9b34fb";
var NotifyCharacteristicGuid = "00002af0-0000-1000-8000-00805f9b34fb";

const CommandStart = 0x7e;
const CommandEnd = 0x0d;
/*测试，扫码最终会得到这个*/
const QRCode = "PSN20191019"
/*测试，扫码得到的QRCode传给服务器后，服务器返回QRResult*/
const QRResult = "00-1D-00-3F-0E-47-39-30-33-35-39-35"

const CommandCodeLogin = 0x00;
const CommandCodeACT = 0x02;
const CommandCodeVolt = 0x01;
const CommandCodeStatus = 0x03;
const CommandCodeLock = 0x20;
const CommandCodeUnLock = 0x21;

const CRC8Table = CreateCrc8Table(0x07)


function CreateCrc8Table(polynomial) {

  let csTable = [] // 256 max len byte array

  for (let i = 0; i < 256; ++i) {
    let curr = i
    for (let j = 0; j < 8; ++j) {
      if ((curr & 0x80) !== 0) {
        curr = ((curr << 1) ^ polynomial) % 256
      } else {
        curr = (curr << 1) % 256
      }
    }
    csTable[i] = curr
  }

  return csTable
}

function CRC8(p)        //p为数组传递参数, Num为数据的长度
{
  let num = p.length;
  var c = 0
  for (let i = 0; i < p.length; i++) {
    c = CRC8Table[(c ^ p[i]) % 256]
  }
  return c;
}

function GetCommand(commandType, commandLength, content) {
  const len = 5 + commandLength

  const buffer = new Uint8Array(len)
  buffer[0] = CommandStart
  buffer[1] = commandType
  buffer[2] = commandLength
  for (let i = 0; i < commandLength; i++) {
    buffer[3 + i] = content[i];
  }
  /*CRC*/
  buffer[3 + commandLength] = CRC8(content)
  buffer[4 + commandLength] = CommandEnd
  return buffer;
}

// import RuleList from '../../components/RuleList';

export default class batteryScanCode extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'scanCode',
  };


  constructor() {
    super(...arguments)
    this.state = {
      scanCodeResult: '',
      devices: [],
      connected: false,
      chs: [],
      BatteryBLEData: {
        /*硬件版本号*/
        Version: 0,
        /*校验状态 0未校验，-1：校验失败，1：校验成功*/
        VerifyStatus: 0,
        /*电芯1 内部电压*/
        V1: 0,
        /*电芯2 内部电压*/
        V2: 0,
        /*电芯3 内部电压*/
        V3: 0,
        /*电芯4 内部电压*/
        V4: 0,
        /*瞬间电流 放电为负数，充电为正数*/
        A: 0,
        /*电池总安时*/
        Capital: 0,
        /*剩余电量百分比*/
        Percent: 0,
        /*循环次数*/
        R: 0,
        /*L0放电电流过大保护*/
        L0: 0,
        /*L1充电电流过大保护*/
        L1: 0,
        /*L2充电温度过高保护*/
        L2: 0,
        /*L3放电温度过高保护*/
        L3: 0,
        /*L4充电温度过低保护*/
        L4: 0,
        /*L5放电温度过低保护*/
        L5: 0,
        /*L6放电电压过低保护*/
        L6: 0,
        /*L7充电电压过高保护*/
        L7: 0,
        /*L8容量低于百分之30保护*/
        L8: 0,
        /*L9用户自行切断供电*/
        L9: 0,
      }
    }
  }

  componentDidMount = () => {

    console.log(this.state.BatteryBLEData);

    setTimeout(() => {
      this.openBluetoothAdapter()
    }, 200);
    Taro.getSystemInfo({
      success: res => console.log(res.platform)
    }).then(res => console.log(res.platform))

    Taro.getUserInfo().then(_ => {
      console.log(_);

    }).catch(e => {
      console.log(e);

    })
  };

  scanCode = () => {
    Taro.scanCode({ onlyFromCamera: true }).then(({ result }) => {
      Taro.showToast({
        title: `扫描结果: ${result}`,
        icon: 'none',
        duration: 2000
      })
    }).catch(e => {
      console.log(e);
    })
  }

  inArray(arr, key, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] === val) {
        return i;
      }
    }
    return -1;
  }


  //开始扫描初始化蓝牙
  openBluetoothAdapter() {
    Taro.openBluetoothAdapter({
      success: (res) => {
        console.log('openBluetoothAdapter success', res)
        this.startBluetoothDevicesDiscovery()
      },
      fail: (res) => {
        if (res.errCode === 10001) {
          Taro.onBluetoothAdapterStateChange(function (result) {
            console.log('onBluetoothAdapterStateChange', result)
            if (res.available) {
              this.startBluetoothDevicesDiscovery()
            }
          })
        }
      }
    })
  }
  // 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，
  // 请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索。
  startBluetoothDevicesDiscovery() {
    if (this._discoveryStarted) {
      return
    }
    this._discoveryStarted = true
    Taro.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      success: (res) => {
        console.log('startBluetoothDevicesDiscovery success', res)
        this.onBluetoothDeviceFound()
      },
    })
  }

  // wx.stopBluetoothDevicesDiscovery 方法停止搜索。/
  stopBluetoothDevicesDiscovery() {
    Taro.stopBluetoothDevicesDiscovery()
    this._discoveryStarted = false;
  }

  // 监听寻找到新设备的事件
  onBluetoothDeviceFound() {
    Taro.onBluetoothDeviceFound((res) => {
      // console.log(res,'xxxxsss');
      const { devices } = res
      if (Array.isArray(devices) && devices.length) {

        devices.forEach(itemKey => {
          if (!itemKey.name && !itemKey.localName) return
          if (itemKey.advertisServiceUUIDs && itemKey.advertisServiceUUIDs[0]) {
            /*只查找特定的电池*/
            if (itemKey.advertisServiceUUIDs[0].toLowerCase() != BatteryUUID.toLowerCase()) return
          } else {
            return
          }
          const foundDevices = this.state.devices.map(k => k.deviceId)
          const devicesList = this.state.devices
          if (!foundDevices.includes(itemKey.deviceId)) {
            devicesList.push(itemKey)
            this.setState({ devices: devicesList })
          }
        })

      }

    })
  }

  //点击选择设备建立蓝牙链接
  createBLEConnection = (ds) => {
    const currentDeviceId = ds.deviceId
    // const name = ds.name
    Taro.createBLEConnection({
      deviceId: currentDeviceId,
      success: (res) => {
        console.log(res, '点击选择设备建立蓝牙链接');
        // this.setData({
        //   connected: true,
        //   name: name,
        //   deviceId: currentDeviceId
        // })
        this.getBLEDeviceServices(currentDeviceId)
      }
    })
    this.stopBluetoothDevicesDiscovery()
  }

  getBLEDeviceServices(deviceId) {
    Taro.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        console.log("wx.getBLEDeviceServices ok 服务", res)
        const { services } = res

        const tag = services.find(item => item.uuid.toLowerCase() === BatteryUUID.toLowerCase())
        if (!tag) return
        console.log(tag, '找到设备');
        this.getBLEDeviceCharacteristics(deviceId, tag.uuid)
      }
    })
  }

  //取到需要的服务-读取特征值
  getBLEDeviceCharacteristics(deviceId, serviceId) {
    Taro.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
      success: (res) => {
        console.log('取到需要的服务-读取特征值成功', res);
        for (let i = 0; i < res.characteristics.length; i++) {
          let item = res.characteristics[i]
          if (item.properties.read) {
            // Taro.readBLECharacteristicValue({
            //   deviceId,
            //   serviceId,
            //   characteristicId: item.uuid,
            // })
          }
          if (item.properties.write) {
            // this.setData({
            //   canWrite: true
            // })
            this._deviceId = deviceId
            this._serviceId = serviceId
            this._characteristicId = item.uuid
          }


          if (item.properties.notify || item.properties.indicate) {

            Taro.notifyBLECharacteristicValueChange({
              deviceId,
              serviceId,
              characteristicId: item.uuid,
              state: true,
            })

          }
        }

        // setTimeout(() => {
        //   this.writeBLECharacteristicValue()
        // }, 200);
      },
      fail(res) {
        console.error('getBLEDeviceCharacteristics', res)
      }
    })
    // 操作之前先监听，保证第一时间获取数据
    Taro.onBLECharacteristicValueChange((characteristic) => {
      console.log(characteristic, '读取特征值-x');
      // console.log("响应数据:", ab2hex(characteristic.value))
      this.UpdateBatteryBLEData(characteristic.value)
    })

  }

  //设置校验
  writeBLECharacteristicValue(data) {
    console.log(data)
    console.log(this._deviceId)
    Taro.writeBLECharacteristicValue({
      deviceId: this._deviceId,
      serviceId: this._serviceId,
      characteristicId: this._characteristicId,
      value: data.buffer,
      writeType: 'response'
    })
  }


  ////
  GetBatteryLogin(password) {
    const data = password.split("-")
    const buffer = new Uint8Array(data.length)
    for (let i = 0; i < data.length; i++) {
      buffer[i] = parseInt(data[i], 16)
    }
    return GetCommand(CommandCodeLogin, data.length, buffer)
  }

  TestGetBatteryLogin = () => {
    let buffer = this.GetBatteryLogin(QRResult)
    this.writeBLECharacteristicValue(buffer)
  }


  hexToInt(hex) {
    if (hex.length % 2 != 0) {
      hex = "0" + hex;
    }
    var num = parseInt(hex, 16);
    var maxVal = Math.pow(2, hex.length / 2 * 8);
    if (num > maxVal / 2 - 1) {
      num = num - maxVal
    }
    return num;
  }

  //更新电池信息
  UpdateBatteryBLEData = (buffer) => {
    const data = new Uint8Array(buffer)
    if (data && data.length >= 5) {
      const crc = data[data.length - 2]
      const d = data.slice(3, -2)
      if (CRC8(d) === crc) {
        const dataType = data[1]
        console.log(this, '谁');

        const { BatteryBLEData } = this.state

        switch (dataType) {
          case CommandCodeLogin:
            BatteryBLEData.Version = data[3]
            BatteryBLEData.VerifyStatus = data[4] === 0xAA ? 1 : 0
            break;
          case CommandCodeACT:
            let a = data[4]
            let b = data[3]
            if ((a & 0x10) === 0x10) {
              a = (a | 0xE0) & 0xFF;
            }
            let A = ((a & 0xFF) << 8) | (b & 0xFF);
            console.log((A & 0xFFFF).toString(16))
            BatteryBLEData.A = this.hexToInt((A & 0xFFFF).toString(16)) / (16384 * 0.0002)
            let T = (data[6] << 8) | (data[5] & 0xFF);
            BatteryBLEData.T = (this.hexToInt((T & 0xFFFF).toString(16)) - 2731) / 10.0;
            BatteryBLEData.Percent = (data[7] & 0xFF);
            BatteryBLEData.Capital = (data[8] & 0xFF);
            let R = (data[10] << 8) + (data[9] & 0xFF);
            BatteryBLEData.R = R;
            break;
          case CommandCodeLock:
          case CommandCodeUnLock:
          case CommandCodeStatus:
            let l = data[3];
            BatteryBLEData.L0 = ((l & 0x01) == 0x01) ? 1 : 0;
            BatteryBLEData.L1 = ((l & 0x02) == 0x02) ? 1 : 0;
            BatteryBLEData.L2 = ((l & 0x04) == 0x04) ? 1 : 0;
            BatteryBLEData.L3 = ((l & 0x08) == 0x08) ? 1 : 0;
            BatteryBLEData.L4 = ((l & 0x10) == 0x10) ? 1 : 0;
            BatteryBLEData.L5 = ((l & 0x20) == 0x20) ? 1 : 0;
            BatteryBLEData.L6 = ((l & 0x40) == 0x40) ? 1 : 0;
            BatteryBLEData.L7 = ((l & 0x80) == 0x80) ? 1 : 0;

            l = data[4];
            BatteryBLEData.L8 = ((l & 0x01) == 0x01) ? 1 : 0;
            BatteryBLEData.L9 = ((l & 0x02) == 0x02) ? 1 : 0;
            break;
          case CommandCodeVolt:
            BatteryBLEData.V1 = ((data[4] << 8) + (data[3] & 0xFF)) * 6.0 / 4096;
            BatteryBLEData.V2 = ((data[6] << 8) + (data[5] & 0xFF)) * 6.0 / 4096;
            BatteryBLEData.V3 = ((data[8] << 8) + (data[7] & 0xFF)) * 6.0 / 4096;
            BatteryBLEData.V4 = ((data[10] << 8) + (data[9] & 0xFF)) * 6.0 / 4096;

          default:
            break;
        }
        console.log(BatteryBLEData, '电池xxx')
        this.setState({ BatteryBLEData })
      }
      else {
        console.log("CRC校验失败")
      }
    }
  }


  GetBatteryAVT() {
    const buffer = new Uint8Array(2)
    buffer[0] = 0x01;
    buffer[1] = 0x02;
    return GetCommand(CommandCodeACT, 2, buffer)
  }

  TestGetBatteryACT =() => {
    let buffer = this.GetBatteryAVT()
    this.writeBLECharacteristicValue(buffer)
  }

  render() {
    const { devices } = this.state
    const scrollTop = 0
    const Threshold = 20
    const scrollStyle = {
      height: '150px'
    }
    const vStyleA = {
      height: '150px',
      'background-color': 'rgb(26, 173, 25)'
    }


    return (
      <View className='batteryScanCode_page'>
        <View className='scanCode_mian'>
          {/* <View className='scanCode_text'> 请点击“扫描绑定电池”扫描电池二维码进行绑定使用 </View>
          <View className='scanCodeBox'>
            <Image className='scanCodeBorder' src={scanCodeBorderImg} />
            <Image className='cpImg' src={productImg} />
          </View>
          <View className='scanCode_text'> {this.state.scanCodeResult} </View> */}

          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
          >
            {
              devices.map(item => {
                return <View style={vStyleA} key={item.deviceId} onClick={() => this.createBLEConnection(item)}>
                  <View> Name :  {item.localName} </View>
                  <View> Signal: {item.RSSI}db </View>
                </View>
              })
            }
          </ScrollView>

        </View>
        <View className='scanCode_open'>
          <AtButton onClick={this.scanCode} type='primary'> 扫描绑定电池+ </AtButton>
          <AtButton onClick={this.TestGetBatteryLogin} type='primary'>设备校验</AtButton>
          <AtButton onClick={this.TestGetBatteryACT} type='primary'>获取电流</AtButton>
        </View>
      </View>
    )
  }
}
