new Vue({
    el: "#add",
    data:{
        post_iteam: []
    },
    mounted(){
        axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.post_iteam = respose.data)
    }
})