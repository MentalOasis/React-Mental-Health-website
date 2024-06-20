
import React, { useState } from 'react';
import { Form, Input, Button, Card, Alert, Modal, Spin, Select } from 'antd';

const { Option } = Select;

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']); // Aumentar a 4 opciones
  const [correctOption, setCorrectOption] = useState('');
  const [questionError, setQuestionError] = useState('');
  const [optionsError, setOptionsError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const validateQuestion = (value) => {
    if (value.trim() === '') {
      setQuestionError('Por favor ingresa la pregunta.');
      return false;
    }
    setQuestionError('');
    return true;
  };

  const validateOptions = () => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].trim() === '') {
        setOptionsError('Por favor ingresa todas las opciones.');
        return false;
      }
    }
    setOptionsError('');
    return true;
  };

  const onFinish = () => {
    const questionValid = validateQuestion(question);
    const optionsValid = validateOptions();
    if (questionValid && optionsValid && correctOption !== '') {
      setLoading(true);
      setTimeout(() => {
        setFormSubmitted(true);
        setModalVisible(true);
        setLoading(false);
        console.log('Formulario enviado:', { question, options, correctOption });
      }, 2000);
    }
  };

  const handleModalOk = () => {
    setModalVisible(false);
    setFormSubmitted(false);
    setQuestion('');
    setOptions(['', '', '', '']); // Reiniciar a 4 opciones
    setCorrectOption('');
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setFormSubmitted(false);
  };

  return (
    <div className="question-form-container">
      <Card title="Crear Pregunta de Opción Múltiple">
        <Form
          name="question-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item
            label="Pregunta"
            name="question"
            rules={[{ required: true, message: 'Por favor ingresa la pregunta.' }]}
            help={questionError}
            validateStatus={questionError ? 'error' : ''}
          >
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{ maxWidth: '400px' }}
            />
          </Form.Item>

          {[0, 1, 2, 3].map((index) => ( // Modificar el mapeo para incluir 4 opciones
            <Form.Item
              key={index}
              label={`Opción ${index + 1}`}
              name={`option${index}`}
              rules={[{ required: true, message: 'Por favor ingresa la opción.' }]}
            >
              <Input
                value={options[index]}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                style={{ maxWidth: '400px' }}
              />
            </Form.Item>
          ))}

          <Form.Item
            label="Opción Correcta"
            name="correctOption"
            rules={[{ required: true, message: 'Por favor selecciona la opción correcta.' }]}
          >
            <Select
              value={correctOption}
              onChange={(value) => setCorrectOption(value)}
              style={{ width: 200 }}
            >
              {[0, 1, 2, 3].map((index) => ( // Modificar el mapeo para incluir 4 opciones
                <Option key={index} value={`option${index}`}>
                  Opción {index + 1}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {questionError && <Alert message={questionError} type="error" showIcon />}
          {optionsError && <Alert message={optionsError} type="error" showIcon />}
          {loading && <Spin />}
          {formSubmitted && (
            <Modal
              title="Información guardada"
              visible={modalVisible}
              onOk={handleModalOk}
              onCancel={handleModalCancel}
            >
              <p>¡La pregunta se ha guardado correctamente!</p>
            </Modal>
          )}
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default QuestionForm;