import React, { useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import TopPanel from './topPanel';
import axios from 'axios';
import Back from './Back';

// import axios from 'axios';
// import { Redirect , Link } from 'react-router-dom';
const Patient = props => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
    hospital: '',
    phone: '',
    address: ''
  });

  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleImageUpload = async imge => {
    const data = new FormData();
    data.append('file', imge);
    data.append('upload_preset', 'mappins');
    data.append('cloud_name', 'saranonearth');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/saranonearth/image/upload',
      data
    );
    console.log(res.data.url);
    return res.data.url;
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    try {
      const userImg = await handleImageUpload(image2);
      const img = await handleImageUpload(image);
      console.log(img);
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ ...formData, img, userImg });

      const res = await axios.post(
        'http://localhost:4000/user/patient',
        body,
        config
      );
      console.log(res);
      setFormData({
        ...formData,
        name: '',
        contact: '',
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: '',
        hospital: '',
        phone: '',
        address: ''
      });
      setImage('');
      setImage2('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopPanel />

      <Container>
        <Back />
        <h1>Patient Details:</h1>
        <br />
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Name :</label>
            <div className='form-item'>
              <input
                value={formData.name}
                name='name'
                onChange={handleChange}
                type='text'
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Hospital :</label>
            <div className='form-item'>
              <input
                value={formData.hospital}
                name='hospital'
                onChange={handleChange}
                type='text'
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Address :</label>
            <div className='form-item'>
              <input
                name='address'
                value={formData.address}
                type='text'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Sex :</label>
            <div className='form-item'>
              <input
                name='sex'
                type='text'
                value={formData.sex}
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Contact :</label>
            <div className='form-item'>
              <input
                name='phone'
                type='number'
                onChange={handleChange}
                required='required'
                value={formData.phone}
                maxLength='10'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Age :</label>
            <div className='form-item'>
              <input
                name='age'
                value={formData.age}
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          {/* <Form.Field>
            <label>Doctor :</label>
            <div className='form-item'>
              <select name='doctor' onChange={handleChange}>
                <option value=''></option>
              </select>
            </div>
          </Form.Field> */}
          <Form.Field>
            <label>Cp :</label>
            <div className='form-item'>
              <input
                name='cp'
                type='number'
                value={formData.cp}
                step='0.0001'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Trestbps :</label>
            <div className='form-item'>
              <input
                name='trestbps'
                step='0.0001'
                type='number'
                value={formData.trestbps}
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Chol :</label>
            <div className='form-item'>
              <input
                value={formData.chol}
                name='chol'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Fbs :</label>
            <div className='form-item'>
              <input
                value={formData.fbs}
                name='fbs'
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Restecg :</label>
            <div className='form-item'>
              <input
                name='restecg'
                value={formData.restecg}
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Thalach :</label>
            <div className='form-item'>
              <input
                name='thalach'
                value={formData.thalach}
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Exang :</label>
            <div className='form-item'>
              <input
                name='exang'
                step='0.0001'
                value={formData.exang}
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Oldpeak :</label>
            <div className='form-item'>
              <input
                name='oldpeak'
                value={formData.oldpeak}
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Slope :</label>
            <div className='form-item'>
              <input
                name='slope'
                value={formData.slope}
                step='0.0001'
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Ca :</label>
            <div className='form-item'>
              <input
                name='ca'
                value={formData.ca}
                type='number'
                step='0.0001'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Thal :</label>
            <div className='form-item'>
              <input
                name='thal'
                step='0.0001'
                value={formData.thal}
                type='number'
                onChange={handleChange}
                required='required'
              />
            </div>
          </Form.Field>
          <p>Patient Image</p>
          <input
            accept='image/*'
            id='image2'
            type='file'
            onChange={e => setImage2(e.target.files[0])}
          />
          <p>Scan</p>
          <input
            accept='image/*'
            id='image'
            type='file'
            onChange={e => setImage(e.target.files[0])}
          />
          <Button className='clg'>Send</Button>
        </Form>
      </Container>
    </>
  );
};

export default Patient;
