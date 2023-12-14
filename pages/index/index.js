// index.js
const gujiModel = require('./../../data/guji_data');

Page({
  data: {
    gujiData: [],
    searchQuery: '',
    showImagePopup: false,
    selectedImage: '',
  },
  
  onLoad() {
    this.setData({
      gujiData: gujiModel.getGujiData(),
    });
  },
  onSearchInput: function (e) {
    const query = e.detail.value.trim();
    if(query == ''){
      this.setData({
        gujiData: gujiModel.getGujiData(),
      });
    }
    const filteredGuji = this.data.gujiData.filter(item => item.name.includes(query));

    this.setData({
      gujiData: filteredGuji,
      searchQuery: query,
    });
  },
  toggleImagePopup() {
    this.setData({
      showImagePopup: !this.data.showImagePopup,
    });

    if (!this.data.showImagePopup) {
      const selectedImageURL = "./../../assets/images/map.jpg";
      this.setData({
        selectedImage: selectedImageURL,
      });
    }
  },
  hideImagePopup() {
    this.setData({
      showImagePopup: false,
    });
  },
});


