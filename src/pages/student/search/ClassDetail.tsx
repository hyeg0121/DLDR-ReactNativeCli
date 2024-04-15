import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import ClassDetailHeader from '../../../components/student/search/ClassDetailHeader.tsx';
import DissmissKeyboardView from '../../../components/util/DissmissKeyboardView.tsx';
import SectionTitle from '../../../components/util/SectionTitle.tsx';
import {colors} from '../../../styles/colors.tsx';
import CurriculumSlider from '../../../components/student/search/CurriculumSlider.tsx';
import ClassIntroduction from '../../../components/student/search/ClassIntroduction.tsx';
import MainButton from '../../../components/util/MainButton.tsx';

interface ClassParams {
  id: string;
}

interface ClassData {
  name: string;
  thumbnail: string;
  sub_title: string;
  introduction: string;
}

interface Props {
  route: {
    params: ClassParams;
  };
}

function ClassDetail(props: Props) {
  const {id} = props.route.params;
  // const userId = useSelector((state: RootState) => state.user.id);

  const [classData, setClassData] = useState<ClassData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<ClassData> = await axios.get<ClassData>(
        `http://localhost:3000/classes/${id}`,
      );
      setClassData(response.data);
      console.log(response.data);
      console.log(`http://localhost:3000/${response.data.thumbnail}`);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <ClassDetailHeader title={classData ? classData.name : 'loading'} />
      <DissmissKeyboardView style={styles.container}>
        <Image
          source={
            classData
              ? {uri: `http://localhost:3000/${classData.thumbnail}`}
              : null
          }
          style={styles.thumbnail}
        />
        <View style={styles.curriculumContainer}>
          <SectionTitle title="Curriculums" />
          <CurriculumSlider id={id} />
        </View>
        <ClassIntroduction
          subTitle={classData ? classData.sub_title : 'loading'}
          introduction={classData ? classData.introduction : 'loading'}
        />

        <MainButton label="enroll" handleOnClcik={null} />
      </DissmissKeyboardView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  curriculumContainer: {
    paddingTop: 21,
    paddingHorizontal: 18,
    paddingBottom: 20,
  },
});

export default ClassDetail;
