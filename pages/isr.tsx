import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

type ISRProps = {
    message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props;
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <Link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>이 페이지는 ISR을 통해 빌드 시에 생성된 페이지입니다.</p>
                <p>{message}</p>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에GetStaticProps가 실행됐습니다.`;
    console.log(message, context);
    return {
        props: {
            message,
        },
        revalidate: 60,
    };
};

export default ISR;
