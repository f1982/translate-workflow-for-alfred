import alfy from 'alfy';

async function init() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = await alfy.fetch(url);

  const items = alfy.inputMatches(data, 'title')
    .map(item => ({
      title: item.title,
      subtitle: item.body,
      arg: item.arg,
    }));
  alfy.output(items);
}

function demo() {
  alfy.output([{
    title: 'Unicorn',
    subtitle: alfy.input
  }]);
}

init();
