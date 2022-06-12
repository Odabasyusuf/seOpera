# SeOpera Insights Chrome Extension

The SeOpera Insights Chrome Extension scrapes the most important meta information from any site you visit and gives you instant feedback, including warning messages to let you know if there are elements on a page that might be negatively impacting your SEO. 

# Düzenleme Talimatları

Logoyu Değiştirme:
- assets/img klasöründe bulunan seopera-logo.png isimli logoyu 48x48px formatında değiştirebilirsiniz.

- Ölçülerini değiştirmek için 416. satırda bulunan 
    <img src="assets/img/seopera-logo.png?v=2" class="cursor-pointer w-24 h-4" style="width: 26px;height: 25px;">
width, height ölçülerini değiştirebilirsiniz.

Adı Değiştirme:
- <title> etiketini ve <span class="text-gray-500 text-sm mr-1 ml-1">SeOpera</span> etiketini değiştirebilirsiniz.

Header Rengini Değiştirme:
- #701DE2 renk kodunu aratıp yerine istediğiniz renk kodunu ekleyebilirsiniz.

İkoncukların Rengini Değiştirme:
- #701DE2 renk kodlarına sahip tüm etiketleri toplu olarak yeni renk koduyla değiştirebilirsiniz. * Header'da değişecektir.
- Arka plandaki hafif rengi, #701DE23b kodunun aratıp yeni rengi ile toplu olarak değiştirebilirsiniz.

Genel Arka Planı Rengini Değiştirme
- 16.satırda bulunan 
<div class="rounded p-4 antialiased font-sans" style="width: 680px; background: rgb(237, 240, 246);">
kısmında background'u değiştirebilirsiniz. 


# Programlamaya Dair
- Tüm mantıksal programlama js/algorithm.js içindeki dosyadadır.
- Yeni bir fonksiyon için varolan fonksiyonlardan bir yapıyı kopyalayıp değişkenlerini özelleştirin, ve document.querySelector ile diğerlerinde olduğu gibi istediğiniz verileri getirecek selector'u yazın. 
Function(results) size dönen veriyi verecektir.
- Elde edilen veriyi yazdıracağınız html etiketine özel bir id verin, ve js dosyasında 
document.getElementById("oluşturulanid").innerHTML = 'yazdıracağınız veri' şeklinde html'e yazdırın.


# Current Features

The extension easily and clearly displays the:

- Title tag (with character count)
- Meta Description (with character count)
- Robots.txt settings (including potential no-index tags)
- Meta Keywords 

# Steps to use the extension

1. Download the files and store them in a folder

2. Open the URL chrome://extensions/ on your chrome browser and turn on the Developer Mode

3. Click on the button "Load Unpacked" and select the downloaded folder

4. The chrome extesnion is now available on your browser action and is ready to run
# seOpera
