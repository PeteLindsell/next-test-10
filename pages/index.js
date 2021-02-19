import { Component } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const fetcher = url => fetch(url).then(r => r.json())

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

const Home = () => {
  const { data, error } = useSWR('https://fws-public.cancerresearchuk.org/v1/fundraisers/c1b49b5f-4a1b-4aaf-81ee-f1a9c34fa1ad/fundraisingpages/public', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
    <ul>
      stuff
      {data.results.map(page => (
        <li>
          <Link href={`page/${page.uniqueId}`}>
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <SortableComponent />
    </>
  );
}

export default Home
