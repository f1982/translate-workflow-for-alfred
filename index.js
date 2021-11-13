import alfy from 'alfy';

const url = 'https://jsonplaceholder.typicode.com/posts';

async function init() {
  const data = await alfy.fetch(url);

  const items = alfy.inputMatches(data, 'title')
    .map(item => ({
      title: item.title,
      subtitle: item.body,
      arg: item.arg,
    }));
  alfy.output(items);
}

//init()

function demo() {
  alfy.output([{
    title: 'Unicorn',
    subtitle: alfy.input
  }]);
}

demo();
