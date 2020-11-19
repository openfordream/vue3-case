function formatTime(time:any) {
    let arr:any[] = []
    time = time.toLocaleDateString()
    
    time.replace(/\d+/g,(val:any) =>{
        val = val < 2 ? '0${val}' : val;
        arr.push(val)
    })
    return arr
}

export default {
    formatTime
}