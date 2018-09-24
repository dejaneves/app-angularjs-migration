class BooksController {
  Books: any[];

  static $inject = ['BooksService'];

  constructor (BooksService: any) {
    console.log('HERE')
    this.Books = [{
      isbn: '9781593275846',
      title: 'Eloquent JavaScript, Second Edition',
      subtitle: 'A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      published: '2014-12-14T00:00:00.000Z',
      publisher: 'No Starch Press',
      pages: 472,
      website: 'http://eloquentjavascript.net/'
    }]
  }
}

export default BooksController
