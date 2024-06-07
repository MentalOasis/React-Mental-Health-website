import React, { useState } from 'react';
import { Card, Statistic, Row, Col, Modal } from 'antd';
import { motion } from 'framer-motion'; //npm install framer-motion

const AdminDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="admin-dashboard-container">
      <Card title="Dashboard" className="dashboard-card">
        <Row gutter={[16, 16]} justify="center">
          {/* Tarjeta 1: Total de Usuarios */}
          <Col xs={24} sm={12} lg={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleModal}
            >
              <Card className="data-card" style={{ background: '#E1F5FE' }}>
                <Statistic title="Total de Usuarios" value={1000} />
              </Card>
            </motion.div>
          </Col>
          
          {/* Tarjeta 2: Usuarios Activos */}
          <Col xs={24} sm={12} lg={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="data-card" style={{ background: '#C8E6C9' }}>
                <Statistic title="Usuarios Activos" value={500} />
              </Card>
            </motion.div>
          </Col>

          {/* Tarjeta 3: Preguntas Respondidas */}
          <Col xs={24} sm={12} lg={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="data-card" style={{ background: '#FFECB3' }}>
                <Statistic title="Preguntas Respondidas" value={3000} />
              </Card>
            </motion.div>
          </Col>

          {/* Tarjeta 4: Nuevos Usuarios */}
          <Col xs={24} sm={12} lg={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="data-card" style={{ background: '#FFCCBC' }}>
                <Statistic title="Nuevos Usuarios" value={200} />
              </Card>
            </motion.div>
          </Col>

          {/* Tarjeta 5: Tiempo de Juego (Horas) */}
          <Col xs={24} sm={12} lg={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="data-card" style={{ background: '#E1F5FE' }}>
                <Statistic title="Tiempo de Juego (Horas)" value={240} />
              </Card>
            </motion.div>
          </Col>

          {/* Tarjeta 6: Preguntas con Mayor Error */}
          <Col xs={24} sm={12} lg={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="data-card" style={{ background: '#FFCCBC' }}>
                <Statistic title="Preguntas con Mayor Error" value={50} />
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Card>
      
      {/* Modal para la primera tarjeta */}
      <Modal
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={null}
        centered
        destroyOnClose
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="data-card" style={{ background: '#F8BBD0 '}}>
            <Statistic title="Total de Usuarios" value={1000} />
          </Card>
        </motion.div>
      </Modal>
    </div>
  );
};

export default AdminDashboard;

