import { Input } from 'components/Input';
import styled from 'styled-components';

const Form = styled.form`
  display: block;
  margin-bottom: 2em;
`;

const InputNewCrawler = () => {
  return (
    <Form>
      <label htmlFor='new-crawler'>Nova busca</label>
      <Input type='text' id='new-crawler' />
    </Form>
  );
};

export { InputNewCrawler };
