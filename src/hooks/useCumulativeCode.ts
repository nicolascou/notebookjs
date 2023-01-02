import { useAppSelector } from '../app/hooks';


export const useCumulativeCode = (cellId: string) => {
  return useAppSelector(state => {
    const { data, order } = state.cells;
    const orderedCells = order.map(id => data[id]);

    var display = `var html = (value) => { 
      const root = document.querySelector('#root');
      if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
          const raiz = ReactDOM.createRoot(root);
          raiz.render(value);
        } else {
          root.innerHTML = JSON.stringify(value);
        }
      } else {
        root.innerHTML = value; };
    };`
    var notDisplay = `var html = () => {};`
    
    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCode.push(display);
        } else {
          cumulativeCode.push(notDisplay);
        }
        cumulativeCode.push(c.content);
      } 
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join('\n');
};