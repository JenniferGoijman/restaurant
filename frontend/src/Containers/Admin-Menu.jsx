import React, { useState, useEffect } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { connect } from 'react-redux';
import { Card, Row, Col, Typography, Button, notification } from 'antd';
import { getAllSort, update } from '../redux/actions/categoriessort';
import './Admin-Menu.scss'

const AdminMenu = props => {
  useEffect(() => { getAllSort(); }, []);
  console.log(props);
  const categoriesSorted = props.categorysort?.sort((a, b) => a.index - b.index);
  const [items, setItems] = useState(categoriesSorted);
  const { Title } = Typography;
  
  const SortableItem = SortableElement(({value}) => (
    <li className="category" tabIndex={0} id={value.category?._id}>{value.category?.name}</li>
  ));
  
  const SortableList = SortableContainer(({items}) => {
    return (
      <ul>
        {items?.map((value, index) => (
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
            //notification.success({ message: 'Orden de Categoría', description: 'Orden de Categoría modificado con éxito', duration:2000})
        })
        .catch(()=>{
            //notification.error({ message: 'Orden de Categoría', description: 'Hubo un problema al intentar modificar el Orden de Categoría', duration:2000})
        })           
    })
  }

  return (
    <div>
       <Row justify="center">
            <Col span={18} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Title level={2}> Ordene las categorías como quiera que se visualicen en el menú </Title>
                    </Row>
                    <SortableList items={items} onSortEnd={onSortEnd} />
                    <Button htmlType="button" style={{ margin: '8px 0' }} onClick={saveNewSort}> Guardar </Button>
                </Card>
            </Col>
        </Row>
    </div>
  ) 
}

const mapStateToProps = ({ categorysort }) => ({categorysort:categorysort.categorysort})
export default connect(mapStateToProps) (AdminMenu);