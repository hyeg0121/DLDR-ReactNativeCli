import React, {useCallback, useEffect, useState} from 'react';
import MyLectureHeader from '../../../components/student/myclasses/MyLectureHeader.tsx';
import axios from 'axios';
import {Text} from 'react-native';

interface ClassParams {
  id: string;
  name: string;
}

interface Props {
  route: {
    params: ClassParams;
  };
}

function Lecture(props: Props) {
  const {id, name} = props.route.params;

  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/classes/${id}/curriculums`,
      );

      console.log(response.data);
      setCurriculums(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <MyLectureHeader title={name} />
    </>
  );
}

export default Lecture;
