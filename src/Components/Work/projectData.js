import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

const projects = [
    {
        id: 1, 
        title: 'Synchronized Video Player', 
        img: img1,
        url: 'https://github.com/someshvk/Vwatch',
        description: [' An Angular single page web application to watch any YouTube video with friends together.', 
        'Implemented Sockets for synchronization between users.',
        ' Built on top of NodeJS with a nice SCSS UI.'],
        technologies: ['Angular', 'TypeScript', 'Sockets', 'Node.js', 'YouTube API', 'SCSS']
    },
    {
        id: 2, 
        title: 'An Android Messaging Application', 
        img: img2,
        url: 'https://github.com/someshvk/BetaC',
        description: [' An Android application with regular messaging features and image sharing.', 
        ' Built with KOTLIN language and firebase for user authentication and Database storage.'],
        technologies: ['Kotlin', 'Firebase', 'MySQL', 'Android']
    },
    {
        id: 3,
        title: 'Speech Recognition with Flutter', 
        img: img3,
        url: 'https://github.com/someshvk/stopwatch_miniproject',
        description: [' Implements Speech Recognition API to operate a Stopwatch and convert speech to text in a Flutter application.'],
        technologies: ['Speech Recognition', 'Flutter', 'Android']
    }
];
export default projects;