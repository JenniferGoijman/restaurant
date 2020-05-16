import React, { useState, useEffect } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';
import { getAllSort, update } from '../redux/actions/categoriessort';

const Sortable = props => {
  useEffect(() => { getAllSort(); }, []);
  const categoriesSorted = props.categorysort.sort((a, b) => a.index - b.index);
  const [items, setItems] = useState(categoriesSorted);
  
  const SortableItem = SortableElement(({value}) => (
    <li tabIndex={0} id={value.category?._id}>{value.category?.name}</li>
  ));
  
  const SortableList = SortableContainer(({items}) => {
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={value._id} index={index} value={value} />
        ))}
      </ul>
    );
  });
  
  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  
  const saveNewSort = () => {
    items.map((categorySort, index) => {
      const categorySortId = categorySort._id;
      const categorySortNew = {category:categorySort.category, index:index};
      console.log(categorySortId, categorySortNew)
      update(categorySortId, categorySortNew)
        .then(res => {
            notification.success({ message: 'Orden de Categoría', description: 'Orden de Categoría modificado con éxito', duration:2000})
        })
        .catch(()=>{
            notification.error({ message: 'Orden de Categoría', description: 'Hubo un problema al intentar modificar el Orden de Categoría', 
            duration:2000})
        })           
    })
  }

  return (
    <div>
      <SortableList items={items} onSortEnd={onSortEnd} />
      <Button htmlType="button" style={{ margin: '8px 0' }} onClick={saveNewSort}> Guardar </Button>
    </div>
  ) 
}

const mapStateToProps = ({ categorysort }) => ({categorysort:categorysort.categorysort})
export default connect(mapStateToProps) (Sortable);