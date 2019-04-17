const reducer = (state,{type,payload})=>{
    // console.log(type,payload)][p]

    let searchCai = [];
    let searchSoup = [];
    
    switch(type){
        case "CAI_LIST" :
        return Object.assign({},state,{...state,caiList : payload});
        case "SEARCH_CAI" :
        if(payload.searchType){
            if(payload.keyWord !== ""){
                state[payload.searchType].forEach(val=>{
                    if(val.children){
                        val.children.forEach(name=>{
                            // if(name.name.includes(payload.keyWord)){
                            //     searchCai.push(name)
                            // }
                            if(name.name.search(RegExp(payload.keyWord)) >= 0){
                                // console.log(name.name.search(RegExp(payload.keyWord)))
                                searchCai.push(name)
                            }
                        })
                    }
                })
                return Object.assign({},state,{...state,searchCai : searchCai})
            }else{
                return Object.assign({},state,{...state,searchCai : []})
            }
        }
        
        case "FOOT" :
        return Object.assign({},state,{...state,foot : payload})


        case "COUNT" :
        return Object.assign({},state,{...state,count : payload})

        case "GOODFOOD" :
        return Object.assign({},state,{...state,goodfood : payload})

        case "SOUP_LIST" :
        return Object.assign({},state,{...state,soupList : payload});

        case "KITCHEN" :
        return Object.assign({},state,{...state,kitchen : payload});


        case "SEARCH_SOUP" :
        if(payload.searchType){
            if(payload.keyWord !== ""){
                state[payload.searchType].forEach(val=>{
                    if(val.title.search(RegExp(payload.keyWord)) >= 0){
                        searchSoup.push(val)
                    }
                    if(val.auth.search(RegExp(payload.keyWord)) >= 0){
                        searchSoup.push(val)
                    }
                    
                })
                return Object.assign({},state,{...state,searchSoup : searchSoup})
            }else{
                return Object.assign({},state,{...state,searchSoup : []})
            }
        }


        case "DIS_DATA" : 
        return Object.assign({},state,{...state,disData : payload})

        case "NEW_DATA" :
        return Object.assign({},state,{...state,newData : payload})

        case "GUANZHU" :
        let a = {};
        let b = [];
        let c = {};
        Object.keys(state).forEach(val=>{
            if(val === payload.dataName){
                state[val].forEach((gg,index)=>{
                    if(gg.id === payload.id){
                        a = JSON.parse(JSON.stringify(state))
                        b = [...a[val]]
                        c = b[index]//gg
                        c.guanzhu = payload.gz;
                    }
                })
            }
        })
        return {...state, [payload.dataName] : b };


        case "SHOP_LIST" :
        return Object.assign({},state,{...state,shopList : payload})

        case "SHOP_CART" :
        return Object.assign({},state,{...state,shopCart : state.shopCart.concat(payload)})

        case "ADD_PRO":
        let add_pro = [...state.shopCart]
        add_pro.forEach(val=>{
            if(val.id === payload){
                val.num += 1
            }
        })
        return {...state , shopCart : add_pro }

        case "REDUCE_PRO":
        let reduce_pro = [...state.shopCart]
        reduce_pro.forEach(val=>{
            if(val.id === payload){
                val.num -= 1
            }
        })
        return {...state , shopCart : reduce_pro }

        case "DEL_PRO" :
        let del_pro = [...state.shopCart]
        del_pro.forEach((val,index)=>{
            if(val.id === payload){
                del_pro.splice(index,1)
            }
        })
        return {...state , shopCart : del_pro }



        case "CHECK_PRO" : 
        let check_pro = [...state.shopCart]
        check_pro.forEach(val=>{
            if(val.id === payload){
                val.checked = !val.checked
            }
        })
        return {...state , shopCart : check_pro }

        case "CHECK_ALL" : 
        let checkAll = [...state.shopCart]
        checkAll.forEach(val=>{
            val.checked = !val.checked
        })
        return {...state , shopCart : checkAll }

 
        case "LOADING" :
        return Object.assign({},state,{loading : payload})



        default :
        return state
    }
}

export default reducer;