export class BaseModel{
    
    id=-1;
    isDeleted = false;
    
    assign(props){
        for(const key in props){
            if(!this.hasOwnProperty(key)){
                delete props[key]
            }
            Object.assign(this, props)
        }
    }
    setProps(key, value){
        if (key=="id"){
            return this
        }
        this[key]=value;
        return this;
    }
}