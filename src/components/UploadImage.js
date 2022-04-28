import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "antd/dist/antd.min.css";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const UploadImage = ({ fileList, setFileList }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleImageUpload = (currentFileList) => {

    if (currentFileList.length > 0) {
      const file = currentFileList[currentFileList.length - 1];
      const isPNG =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg";
      if (!isPNG) {
        setErrMsg(`File is not an image!`)
        return;
      }
    }
    setErrMsg("")
    setFileList(currentFileList);
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
        onChange={(e) => handleImageUpload(e.fileList)}
        onPreview={handlePreview}
        beforeUpload={() => false}
        accept=".png,.jpg,.jpeg"
      >
        {uploadButton}
      </Upload>
      {errMsg && <div>{errMsg}</div>}
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
        zIndex={"2000"}
      >
        <img alt="uploaded" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default UploadImage;
