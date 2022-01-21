import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCheckBox } from '@hooks';

const DaySelect = ({ valueList, initialCheckeds, onChange }) => {
  const { checkedList, handleCheckedAll, handleCheckedElement } = useCheckBox({
    initialCheckeds,
    valueList,
  });

  useEffect(() => {
    onChange && onChange(checkedList);
  }, [checkedList]);

  return (
    <div>
      <label htmlFor="all">
        <input
          type="checkbox"
          id="all"
          onChange={handleCheckedAll}
          checked={checkedList.length === valueList.length}
        />
        all
      </label>
      {valueList.map(({ id, value }) => (
        <label key={id} htmlFor={value}>
          <input
            id={value}
            type="checkbox"
            value={value}
            onChange={handleCheckedElement}
            checked={
              checkedList.length === valueList.length
                ? false
                : checkedList.includes(value)
            }
          />
          {value}
        </label>
      ))}
    </div>
  );
};

DaySelect.defaultProps = {
  initialCheckeds: [],
  onChange: () => {},
};

DaySelect.propTypes = {
  valueList: PropTypes.array.isRequired,
  initialCheckeds: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
};

export default DaySelect;
