import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';


export default class Course extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '课程专区',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='course_page'>
        <View className='course_list_item'>
          <View className='course_list_img'>
           {/* 课程 */}
          </View>
          <View className='course_list_desc'>
            <View className='course_title'>
              企业管理进阶课程
            </View>
            <View className='course_main_desc'>
              Jean Francois（MCC, 大师级教练）现 任ICF国际教练联合会全球董事会
              Jean Francois（MCC, 大师级教练）现 任ICF国际教练联合会全球董事会
            </View>
          </View>
        </View>
      </View>
    )
  }
}
