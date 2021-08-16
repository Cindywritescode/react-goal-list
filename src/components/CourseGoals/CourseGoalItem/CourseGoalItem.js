import styled from 'styled-components';

const GoalItems = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0.5rem;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`

const CourseGoalItem = ({
  onDelete,
  id,
  children
}) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <GoalItems onClick={deleteHandler}>
      {children}
    </GoalItems>
  );
};

export default CourseGoalItem;
