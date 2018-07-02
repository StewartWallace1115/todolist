var example1 = new Vue({
  el: '#app',
  data() {
  	return{items: [],
  		   input:"",
  			element:"",
  			isActive:true
  			}
  	},
  methods: {
  	addItem(){
  		this.items.push({element:this.input, isActive:false});
  	},
  	markItemOut(items){
		items.isActive = !items.isActive;
  	},
  	deleteItem(items){
  		let item = this.items.indexOf(items);
  		this.items.splice(item, 1);
  	}
  }
})
