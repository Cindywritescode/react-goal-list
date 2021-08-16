import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import styled from 'styled-components';

const GoalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseGoalList = ({
  items,
  onDeleteItem
}) => {
  return (
    <GoalList>
      {items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
};

export default CourseGoalList;
