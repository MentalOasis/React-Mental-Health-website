import React, { useState } from 'react';
import { Form, Input, Button, Alert, Modal, Select, Card } from 'antd';

const { Option } = Select;

const AddNewCategoryForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(true);

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null);

    try {
      if (!values.tema || !values.descripcion || !values.cantidad) {
        setError('Por favor completa todos los campos.');
        setLoading(false);
        return;
      }

      setTimeout(() => {
        const cantidad = parseInt(values.cantidad);
        if (cantidad < 1 || cantidad > 10) {
          setError('El número de preguntas debe estar entre 1 y 10.');
          setLoading(false);
          return;
        }

        setSuccess(true);
        setModalVisible(true);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error al enviar la categoría:', error);
      setError('Hubo un error al procesar la solicitud. Por favor, inténtalo de nuevo.');
      setLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setError(null);
  };

  const handleCloseModal = () => {
    setSuccess(false);
    setModalVisible(false);
  };

  const handleInfoClose = () => {
    setInfoVisible(false);
  };

  return (
    <div className="add-new-category-form-container" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <Card title="Agregar Nuevo Tema" className="category-card">
        {infoVisible && (
          <Alert
            message="Recuerda que la creación de Temas y preguntas novedosas y creativas ayudan al desarrollo del juego."
            type="info"
            closable
            onClose={handleInfoClose}
            style={{ marginBottom: '16px' }}
          />
        )}

        {error && <Alert message={error} type="error" showIcon closable onClose={handleCloseAlert} />}
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Tema"
            name="tema"
            rules={[{ required: true, message: 'Por favor ingresa el título del tema' }]}
          >
            <Input placeholder="Ingresa el título del tema" style={{ fontFamily: 'Manrope, sans-serif' }} />
          </Form.Item>
          <Form.Item
            label="Descripción"
            name="descripcion"
            rules={[{ required: true, message: 'Por favor ingresa la descripción del tema' }]}
          >
            <Input.TextArea placeholder="Ingresa la descripción del tema" style={{ fontFamily: 'Manrope, sans-serif' }} />
          </Form.Item>
          <Form.Item
            label="Cantidad de Preguntas"
            name="cantidad"
            rules={[
              { required: true, message: 'Por favor selecciona la cantidad de preguntas' },
            ]}
          >
            <Select placeholder="Selecciona la cantidad de preguntas" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {[...Array(10).keys()].map((num) => (
                <Option key={num + 1} value={num + 1}>{num + 1}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {loading ? 'Guardando...' : 'Guardar Tema'}
            </Button>
          </Form.Item>
        </Form>
        <Modal
          title={success ? "Éxito" : "Error"}
          visible={modalVisible}
          onOk={handleCloseModal}
          onCancel={handleCloseModal}
        >
          {success ? "El tema se ha guardado correctamente." : "Algo salió mal. No se pudo guardar el tema."}
        </Modal>
      </Card>
    </div>
  );
};

export default AddNewCategoryForm;
