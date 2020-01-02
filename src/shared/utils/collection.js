import { sortBy, at } from 'lodash';
import Fuse from 'fuse.js';

export function filterByText(list, filterText) {
  if (filterText === '' || !filterText) {
    return list;
  }

  const fuse = new Fuse(list, {
    keys: ['properties.title', 'properties.username']
  });
  return fuse.search(filterText);
}

export function sortByKey(list, sortKey) {
  const [key, order] = sortKey.split('-');
  if (!key || !order) {
    return list;
  }

  list.forEach(element => {
    element.sortKey = changeToDate(element, key);
  });
  const sorted = sortBy(list, o => at(o, 'sortKey'));
  return order === 'asc' ? sorted : sorted.reverse();
}

function changeToDate(element, key) {
  if (element.properties && element.properties.title) {
    if (isNaN(Date.parse(element.properties.title))) {
      return element.properties.title;
    } else {
      return Date.parse(element.properties.title);
    }
  }
  return element[key];
}

export function sortByLastAccessed(list) {
  return sortBy(list, o => o.lastAccessed).reverse();
}

export function sortDeepByKey(list, sortKey, childrenKey) {
  if (!sortKey || !childrenKey) {
    throw new Error('Insufficient data provided for sorting');
  }
  return sortByKey(list, sortKey).map(item => {
    return {
      ...item,
      [childrenKey]: sortDeepByKey(item[childrenKey], sortKey, childrenKey)
    };
  });
}
