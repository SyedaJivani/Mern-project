import url from 'url';

const adr = 'http://localhost:8080/default.html?year=2017&month=february';

const urlObject = url.parse(adr , true);
console.log(urlObject.host);
console.log(urlObject.pathname);
console.log(urlObject.search);

const q = urlObject.query
console.log(q.year);
console.log(q.month);


