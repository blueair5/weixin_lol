export const request=(params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url : params.url,
            success:(result)=>{
                // resolve 里面就是请求成功的返回值
                resolve(result);

            },
            fail:(err)=>{
                reject(err);
            },
            complete:() => {
                  
            }
        })
    })
}