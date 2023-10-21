# Proje 1
**[22,27,16,2,18,6]** -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

1. Average case: Aradığımız sayının ortada olması
2. Worst case: Aradığımız sayının sonda olması
3. Best case: Aradığımız sayının dizinin en başında olması.
.



**[7,3,5,8,2,9,4,15,6]** dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

## Answers
### **[22,27,16,2,18,6]** -> Insertion Sort
**[22,27,16,2,18,6]** -> *Her adımda sağa giderek soldaki ile sağdaki numaraları karşılaştırırız. Eğer sağdaki soldakinden küçükse sola aktarırız Böylece algoritmamızı tekrar ederek sıralamayı gerçekleştiririz.*
1. **[22,16,27,2,18,6]** 
2. **[16,22,27,2,18,6]** 
3. **[16,22,2,27,18,6]** 
4. **[16,2,22,27,18,6]** 
5. **[2,16,22,27,18,6]**
6. **[2,16,22,18,27,6]**
7. **[2,16,18,22,27,6]**
8. **[2,16,18,22,6,27]**
9. **[2,16,18,6,22,27]**
10. **[2,16,6,18,22,27]**
11. **[2,6,16,18,22,27]**

**Big O Notation:** $n . (n-1) / 2 = O(n^2)$

**Average Case:** 18 sayısının ortada olduğu için ***averega case*** kapsamına girer.


## Answers
**[7,3,5,8,2,9,4,15,6]** dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

1. **[2,3,5,8,7,9,4,15,6]** Minimum eleman bulunur ve listenin başına konur.
2. **[2,3,5,8,7,9,4,15,6]** 3 sayısı en küçük olduğu için değiştirilmez ve bir sonraki adıma geçilir.
3. **[2,3,4,8,7,9,5,15,6]** 
4. **[2,3,4,5,7,9,8,15,6]**

