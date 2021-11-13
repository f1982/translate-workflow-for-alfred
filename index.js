import alfy from 'alfy';
import alfredNotifier from 'alfred-notifier';

alfredNotifier();

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

init();
