import axiosInstance from '@/api/axiosInstance';

export async function getPosts() {
  try {
    const response = await axiosInstance.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
