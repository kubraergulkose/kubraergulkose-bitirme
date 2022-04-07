# Angular Bitirme Projesi 
# Uygulamanın İlk Sayfası 
![image](https://user-images.githubusercontent.com/98026058/162313950-be5df2cb-f2db-4f09-bacb-a1e42c55817f.png)

# Register Form Sayfası 
- Her kullanıcıya bir token verilir. Kullanıcının şifresini ayrıca token olarak verdim.
- Token değeri local storagede tutuluyor.
- Kullanıcı üye olduğunda 'gorest/users' apisine kayıt yapılıyor. Bu api için bir siteden bir key değeri aldım, header kısmında bu key değerini kullandım.
![image](https://user-images.githubusercontent.com/98026058/162319190-b573a61e-ea0e-44b0-a641-376ad0adce41.png)
![image](https://user-images.githubusercontent.com/98026058/162314199-a68fccfa-1589-4da8-b13a-d3a242277298.png)
![image](https://user-images.githubusercontent.com/98026058/162314615-7b4a436c-3245-4e47-a986-00daf574c47a.png)
![image](https://user-images.githubusercontent.com/98026058/162314967-37f0893c-361f-4a27-b575-5e804b826d7e.png)


# Login Form Sayfası 
- Kullanıcı giriş yaparken 'gorest/users' apisi kontrol ediliyor. 
- Giriş başarılı olursa direkt anasayfaya gidiyor.  
![image](https://user-images.githubusercontent.com/98026058/162315673-4498b03b-4c01-448f-acb5-4386eda720cc.png)
![image](https://user-images.githubusercontent.com/98026058/162315997-605a82c0-6d9f-432a-9d0b-e2bcd69675d4.png)

# Login Sonrası İlk Sayfa
![image](https://user-images.githubusercontent.com/98026058/162317281-b508ee52-3b54-4247-bee4-773e6f6d2c2b.png)

- List View iconuna tıklayarak ürünleri liste şeklinde de görüntüleyebiliriz. 
![image](https://user-images.githubusercontent.com/98026058/162319492-6a67fd31-b4bd-49d3-922e-acf40da75d4e.png)

- Liste ve card şeklinde görünümlerde ürün detayları için buton bulunuyor, tıklanıldığında ürün id'lerine göre routing işlemi gerçekleşiyor.
![image](https://user-images.githubusercontent.com/98026058/162320703-ffa012b0-6f48-4928-ab99-b22c922df221.png)

- Ürün hem anasayfadan hem de ürün detayı sayfasından sepete eklenebilir. 

# Sepet Sayfası 
- Kullanıcı sepette toplam ücreti görebilir, ürünleri tek tek silebilir veya 'remove all' butonu ile tüm sepeti boşaltabilir.
![image](https://user-images.githubusercontent.com/98026058/162322523-3d9f0873-53e0-4d7a-b152-b2b63d716d3a.png)

- Sepete eklenen ürünleri console'dan da görebiliriz
![image](https://user-images.githubusercontent.com/98026058/162323031-9a25d8a0-bc4c-472f-af27-5aa81b5b6013.png)

- Pay tuşuna basıldığında, ödeme başarılı alerti verilir ve satılan ürünler console'a yazılır. 
![image](https://user-images.githubusercontent.com/98026058/162323553-d01f21de-c26f-4dc0-a85e-8e21089dad0b.png)
![image](https://user-images.githubusercontent.com/98026058/162323591-e346ed42-afe9-4cec-9e8f-bb1a3be703d5.png)

- Ödemeden sonraki sepet görünümü:
![image](https://user-images.githubusercontent.com/98026058/162323671-510fdcd9-504d-4670-8f9f-5f127aba7fe3.png)


# Admin Sayfası 
- Admin kullanıcı adı: admin@adminkubra.com
- Admin şifresi: admin@adminkubra.com
- Admin giriş yaptığında admin butonu aktif olur. 
- Admin bu sayfada ürünleri silebilir, yeni ürün ekleyebilir, ürünleri güncelleyebilir. 
![image](https://user-images.githubusercontent.com/98026058/162323914-dfefa853-4191-4403-be3b-11748f2ee5f1.png)

- Butona tıklanıldığında admin componenti çalışır, "/admin" routeuna gidilir. Normal kullanıcı bu route'u elle yazsa da gidemez. 
![image](https://user-images.githubusercontent.com/98026058/162324087-0fbcd631-9e8e-4c5e-8545-c124e0508fb3.png)
![image](https://user-images.githubusercontent.com/98026058/162324270-e2e93ed1-5476-4744-bdda-9f5e3ce2c086.png)
![image](https://user-images.githubusercontent.com/98026058/162324298-9968f2f4-72ea-4014-a768-236f86f3e448.png)



