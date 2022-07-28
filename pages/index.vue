<template>
 <div class="content">
   <div class="title">Добавление Товара</div>
   <div class="main">
     <div class="product">
       <form-card>
         <form @submit.prevent="submit">
           <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
             <label class="form__label">Наименование товара</label>
             <input class="form__input" v-model.trim="$v.name.$model">
             <div class="error" v-if="!$v.name.required">Поле является обязательным</div>
           </div>

           <div class="form-group">
             <label class="form__label">Описание товара</label>
             <textarea class="form__input big" v-model.trim.lazy="$v.description.$model"></textarea>
           </div>
           <div class="form-group" :class="{ 'form-group--error': $v.img.$error }">
             <label class="form__label">Ссылка на изображение товара</label>
             <input class="form__input" v-model.trim="$v.img.$model">
             <div class="error" v-if="!$v.img.required">Поле является обязательным</div>
           </div>
           <div class="form-group" :class="{ 'form-group--error': $v.price.$error }">
             <label class="form__label">Цена товара</label>
             <input class="form__input" v-model.trim="$v.price.$model">
             <div class="error" v-if="!$v.price.required">Поле является обязательным</div>
           </div>
           <button :disabled="disabled" class="button" type="submit">Добавить товар</button>
         </form>
       </form-card>
     </div>
     <div class="list">
       <div @mouseenter="active" @mouseleave="disable" class="token" v-for="product in products">
        <product-card>
          <div :class="{ visible: isActive }" @click="deleteItem(product)" class="delete"></div>
          <img class="img" :src="product.img" alt="Изображение отсутстувет">
          <div class="info">
            <div class="name">{{product.name}}</div>
            <div class="description">{{product.description}}</div>
            <div class="price">{{product.price}} руб.</div>
          </div>
        </product-card>
       </div>
     </div>
  </div>
 </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'


export default {
  name: "index",
  data() {
    return {
      name: '',
      description: '',
      img: '',
      price: '',
      submitStatus: null,
      disabled: true,
      isActive: false,
      products: [],
    }
  },
  validations: {
    name: {
      required,
    },
    description: {

    },
    img: {
      required
    },
    price: {
      required
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {

      } else {
        let productName = this.name
        let productDescription = this.description
        let productImg = this.img
        let productPrice = this.price
        productPrice = productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        this.products.push({
          name: productName,
          description: productDescription,
          img: productImg,
          price: productPrice
        });
        return(this.products)
      }
    },
    valid() {
      if (this.$v.$invalid) {
        this.disabled = true
        return(this.disabled)
      } else {
        this.disabled = false
        return(this.disabled)
      }
    },
    active() {
      this.isActive = true
    },
    disable() {
      this.isActive = false
    },
    deleteItem(product) {
      this.products.splice(this.products.indexOf(product), 1);
    }
  },
  watch: {
    name() {
      this.valid()
    },
    img() {
      this.valid()
    },
    price() {
      this.valid()
    }
  }

}
</script>

<style scoped lang="scss">
  .html,body {
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 1440px;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 32px 32px 0 32px;
    .title {
      font-size: 28px;
      font-weight: 600;
    }
    .main {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      .product {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 332px;
        max-height: 440px;
        .error {
          font-size: 8px;
          color: #ff8484;
        }
        .button {
          width: 100%;
          height: 100%;
          margin-top: 12px;
          background: #7BAE73;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          color: #ffffff;
        }
        .button:disabled {
          background: #EEEEEE;
          border-radius: 10px;
          color: #B4B4B4;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          .form__label {
            font-size: 10px;
          }
          .form__input {
            border:none;
            border-radius: 4px;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px 0px #0000001A;
            height: 34px;
          }
          textarea {
            border-radius: 4px;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px 0px #0000001A;
            resize: none;
            outline: none;
          }
          .big {
            height: 108px;
          }
          .error {
            visibility: hidden;
          }
        }
        .form-group--error {
          .form__input {
            border: 1px solid #FF8484
          }
          .error {
            visibility: visible;
          }
        }
      }
      .list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .token {
          margin-left: 16px;
          margin-bottom: 16px;
          .delete {
            width: 32px;
            height: 32px;
            background-color: #ff8484;
            border-radius: 10px;
            position: absolute;
            margin-left: 308px;
            margin-top: -8px;
            visibility: hidden;
          }
          .visible {
            visibility: visible;
          }
          .img {
            height: 100%;
            width: 100%;
            max-width: 332px;
            max-height: 200px;
            object-fit: fill;
          }
          .info {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            max-width: 300px;
            margin: 16px 16px 0 16px;
            .name {
              font-size: 20px;
              font-weight: 600;
              width: 100%;
              max-width: 300px;
            }
            .description {
              margin-top: 16px;
              font-size: 16px;
              width: 100%;
              max-width: 300px;
            }
            .price {
              margin-top: 170px;
              font-size: 24px;
              width: 100%;
              font-weight: 600;
              max-width: 300px;
              position: absolute;
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
</style>