import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import 'antd/dist/antd.min.css';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error({content: 'You can only upload JPG/PNG file!', style: {zIndex: '2000'}});
    }
    return isJpgOrPng;
}

const UploadImage = ({ fileList, setFileList }) => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewVisible(true);
        setPreviewImage(file.url || file.preview);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <div>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={e => setFileList(e.fileList)}
                onPreview={handlePreview}
                beforeUpload={beforeUpload}
            >
                {uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={() => setPreviewVisible(false)}
                zIndex={'2000'}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>

    );
}

export default UploadImage;