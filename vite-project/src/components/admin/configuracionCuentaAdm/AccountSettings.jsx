import React, { useState } from 'react';
import { Form, Input, Button, Card, Alert, Modal, Spin } from 'antd';
// Archivo CSS para personalizar estilos con Manrope

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const onFinish = (values) => {
    const emailValid = validateEmail(values.email);
    const passwordValid = validatePassword(values.password);
    if (emailValid && passwordValid) {
      setLoading(true); // Activar estado de carga
      setTimeout(() => {
        setFormSubmitted(true);
        setModalVisible(true);
        setLoading(false); // Desactivar estado de carga después de un tiempo ficticio
        console.log('Formulario enviado:', values);
      }, 2000); // Simular una carga de 2 segundos antes de mostrar el modal
    }
  };

  const handleModalOk = () => {
    setModalVisible(false);
    setFormSubmitted(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setFormSubmitted(false);
  };

  return (
    <div className="account-settings-container">
      <Card title="Ajustes de la Cuenta">
        <Form
          name="account-settings-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          labelCol={{ span: 10 }} // Ancho de la etiqueta
          wrapperCol={{ span: 20 }} // Ancho del campo
        >
          <Form.Item
            label="Nombre de usuario"
            name="username"
            rules={[
              { required: true, message: 'Por favor ingresa tu nombre de usuario!' },
            ]}
          >
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="small" // Establecer el tamaño del campo como pequeño
              style={{ maxWidth: '200px' }} // Ajustar el ancho máximo del campo
            />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              { required: true, message: 'Por favor ingresa tu correo electrónico!' },
            ]}
            help={emailError}
            validateStatus={emailError ? 'error' : ''}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small" // Establecer el tamaño del campo como pequeño
              style={{ maxWidth: '200px' }} // Ajustar el ancho máximo del campo
            />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: 'Por favor ingresa tu contraseña!' },
            ]}
            help={passwordError}
            validateStatus={passwordError ? 'error' : ''}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small" // Establecer el tamaño del campo como pequeño
              style={{ maxWidth: '200px' }} // Ajustar el ancho máximo del campo
            />
          </Form.Item>

          {emailError && (
            <Alert
              message={emailError}
              type="error"
              showIcon
            />
          )}

          {passwordError && (
            <Alert
              message={passwordError}
              type="error"
              showIcon
            />
          )}

          {loading && <Spin />} {/* Mostrar componente de carga si el estado de carga está activado */}

          {formSubmitted && (
            <Modal
              title="Información guardada"
              visible={modalVisible}
              onOk={handleModalOk}
              onCancel={handleModalCancel}
            >
              <p>¡La información se ha guardado correctamente!</p>
            </Modal>
          )}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AccountSettings;
