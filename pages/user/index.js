Page({
  data:{
    nickName:'',
    userInfo:''
  },
  //取缓存
  onLoad(){
    let user = wx.getStorageSync('user')
    console.log('获取缓存数据',user)
    this.setData({
        userInfo: user
  })
  },
  //定义函数，用于获取用户信息
  login(){
    wx.getUserProfile({
      desc: '用于完善用户信息',
      success: res=> {
        let user = res.userInfo
        wx.setStorageSync('user', user) //缓存用户数据到本地
        // console.log(user)
        this.setData({
          // nickName: user.nickName,  //获取昵称
          // headportrait: user.avatarUrl  //获取头像
          userInfo: user
        })
      },
      fail: res=>{
        console.log("授权失败",res)
      }
    })
  },
  /*退出登陆*/
  loginOut(){
    this.setData({
      userInfo: ''
    })
    wx.setStorageSync('user',null) //清除用户本地缓存
    console.log('清除用户缓存')
  },
  // 接口函数
  requestLabel(){
    wx.request({
      url: 'http://127.0.0.1:5000/label',
      success(res){
        let label = res.data
        console.log(res.data)
      }
    })
  },

  requestPrice(){
    wx.request({
      url: 'http://127.0.0.1:5000/price',
      success(res){
        let price = res.data
        console.log(res.data)
      }
    })
  },
  //跳转余额界面
  gotoremaining:function(){
    wx.navigateTo({
      url: '../remaining/index',
    })
  },
  //跳转历史识别数据界面
  gotohistory:function(){
    wx.navigateTo({
      url: '../history/index',
    })
  }
})