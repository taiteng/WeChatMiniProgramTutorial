// detail.js
const gujiModel = require('./../../data/guji_data');

Page({
  data: {
    gujiItem: {},
  },
  
  onLoad(options) {
    const gujiId = parseInt(options.id);
    const gujiItem = gujiModel.getGujiById(gujiId);

    if (gujiItem) {
      this.setData({
        gujiItem,
      });
    } else {
      wx.showToast({
        title: 'Invalid Guji ID',
        icon: 'none',
        duration: 2000,
        complete: () => {
          wx.navigateBack();
        },
      });
    }
  },
});
