// ● დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

   

 function expo(num, x, cb) {
    if (x === 0) return  cb(1);  
    return expo(num, x - 1, (a) => cb(a * num));  
}

const print = expo(5, 3, (a) => a);  
console.log(print);    //125




// fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მოცემული მისამართიდან და გამოიტანე DOM-ში პოსტის სახით.

//  fetch('https://jsonplaceholder.typicode.com/posts')  
//    .then(res => res.json())
//    .then(res => console.log(res.slice(0,4)))
//    .catch(err => console.log(err))
   
async function fetchData() {
    try {
        const fetchUrl = 'https://jsonplaceholder.typicode.com/posts';
        const rawData = await fetch(fetchUrl);
    
        if (!rawData.ok) {
            throw new Error('პასუხი არ იყო სწორი');
        }

        const data = await rawData.json();
        const postContainer = document.getElementById('postContainer');

        data.forEach((val) => {
            const div = document.createElement('div');
            div.classList.add('post');  
            
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const order = document.createElement('div');
            order.classList.add('order');

            h1.textContent = val.title;
            p.textContent = val.body;
            order.textContent = `${val.id}`;

            div.append(h1, p, order);
        
            postContainer.appendChild(div);
        });
    } catch (error) {
        console.log('შეცდომა:', error);
    }
}
fetchData();


// ● დაწერე ასინქრონული ფუნქცია, რომელიც არგუმენტად იღებს ობიექტს და აკეთებს deep copy-ს.
// ● ფუნქციამ უნდა გამოიძახოს reject თუ არგუმენტი არ არის ობიექტი. თუ ყველაფერი კარგად არის, გამოიძახოს resolve კოპირებული ობიექტით.


async function deepCopyAsync(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        reject('Is not an object');
        return;
      }

      const copiedObj = JSON.parse(JSON.stringify(obj));
      resolve(copiedObj);
    });
  }

  const myObject = { 
    firstname: 'james',
    lastName:'Bond',
    nickName: '007',
    a: 4,
    b: { d:5 }
};

  deepCopyAsync(myObject)
    .then(copied => console.log('Deep copy successful:', copied))
    .catch(error => console.error('Error:', error));
    

    