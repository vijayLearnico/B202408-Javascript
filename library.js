// We will have a set books
// barrow a book


const bookSelf = ['book1','book2','book3','book4']

function librarian(requestedBook){
  for (let index = 0; index < bookSelf.length ; index++) {
     if(requestedBook == bookSelf[index]){
          return 'Book is available'
     }
  }
  return 'Book is not avaiable'
}

const vijayReq = librarian('book7')
const vigeshReq= librarian('book2')
const fizalReq= librarian('book1')



console.log('Vijay requested',vijayReq);
console.log('Vignesh requested',vigeshReq);
console.log('fizal requested',fizalReq);



