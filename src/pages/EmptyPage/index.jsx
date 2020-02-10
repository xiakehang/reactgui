// import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect, useRef } from 'react';
// import { Spin } from 'antd';
// import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const el = useRef(null);
  let width = 0;
  let height = 0;

  if (el.current) {
    const mainEl = el.current.closest('main');

    width = mainEl.clientWidth;
    height = mainEl.clientHeight;
  }

  return (
    <div
      ref={el}
      style={{
        width,
        height,
        border: '1px dashed #555',
        boxSizing: 'border-box',
        overflow: 'auto',
      }}
      title={`wrapper size: ${width}px/${height}px`}
    >
      <div style={{ height: 1000 }}>inner content</div>
    </div>
  );
};
