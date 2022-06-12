var a = document.querySelector(`link[rel='canonical']`);

if (a) {
    document.querySelector(`link[rel='canonical']`).href;
}else{
    'Not Found.';
}