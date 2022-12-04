export const changeData = (data : string)=> {
    return data.replace(/\b(\d\b)/g, '0$1'); 
}