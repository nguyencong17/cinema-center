import styles from './Tags.module.less';
import { Tag } from 'antd';
import React, { useState } from 'react';
const { CheckableTag } = Tag;

const Tags = (props) => {
  const { listGenres } = props
  const [selectedTags, setSelectedTags] = useState(['Books']);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div id={styles.tags}>
      {listGenres.map((item) => (
        <CheckableTag
          key={item.id}
          checked={selectedTags.indexOf(item.id) > -1}
          onChange={(checked) => handleChange(item.id, checked)}
          className={styles.tagItem}
        >
          {item.name}
        </CheckableTag>
      ))}
    </div>
  );
};

export default Tags;