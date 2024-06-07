<template>
  <div>
  <h1>{{ msg }}</h1>
  <div>
      <img class="image" ref="img" :src="require('../assets/images/' + getImgIndex + '.jpg')" />
  </div>
  <div>
      <button class="button" @click="next()" :disabled="btnDisable">Next</button>
  </div>
  <div v-for="pred in predictions" :key="pred.index">
      {{ pred.label }}: {{ pred.probability.toFixed(0) + '%' }}
  </div>
  <div v-if="!predictions.length">hmm.....</div>
</div>
</template>



<script>
import * as tf from '@tensorflow/tfjs';
import labels from "raw-loader!../../public/models/labels.txt";

export default {
  props: {
    msg: String
  },
  data() {
    return {
        image: 1,
        numImages: 16,
        imageURL: null,
        imageLoaded: false,
        labels: labels,
        model: null,
        predictions: [],
        btnDisable: true
    };
  },
  computed: {
    getImgIndex() {
        return this.image.toString();
    },
    disable() {
        if (this.image == this.numImages) {
            return true;
        } else return false;
    },
  },
  async mounted() {
    //load up a new model
    this.model = await tf.loadLayersModel('models/model.json');
    
    // 打印模型的信息
    this.model.summary();

    //parse labels
    this.labels = labels.split("\n").map(e => e.trim());
    
    //run prediction
    this.predict();
  },
  methods: {
    next() {
        this.btnDisable = true;
        this.image++;
        this.predictions = [];
        setTimeout(this.predict, 500);
    },
    async predict() {
      // 獲取圖像元素
      const imageElement = this.$refs.img;
      // 將圖像轉換為張量並縮放像素值
      let imageTensor = tf.browser.fromPixels(imageElement)
        .resizeBilinear([300, 300])
        .toFloat()
        .div(tf.scalar(255.0)) // 縮放像素值到 [0, 1]
        .expandDims(0);
      
      // 使用 predict 方法進行推斷
      const prediction = await this.model.predict(imageTensor);

      prediction.print()
      // 輸出預測結果
      const confidenceScores = prediction.arraySync()[0];
      // 獲取最高概率
      const maxConfidence = Math.max(...confidenceScores); 
      // 獲取最高概率對應的類別索引
      const maxConfidenceIndex = confidenceScores.indexOf(maxConfidence); 

      console.log('最高概率類別索引：', maxConfidenceIndex);
      console.log('最高概率：', maxConfidence);
      
      //build up a predictions object by parsing details to labels and probability
      this.predictions = confidenceScores.map((p, i) => {
        return { index: i, label: this.labels[i], probability: p * 100 };
      });
      this.btnDisable = this.image == this.numImages;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
      margin: 40px 0 0;
  }
  .image {
      min-height: 300px;
      max-height: 300px;
      max-width: 100%;
  }
  .button {
      width: 200px;
      height: 50px;
      border-radius: 5px;
      background-color: blueviolet;
      color: white;
      font-size: 20pt;
      margin: 10px;
  }
  .button:disabled,
  .button[disabled] {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
  }
</style>