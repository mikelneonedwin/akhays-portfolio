const techStack = {
  // Frontend
  'react': ['jsx', 'tsx', 'react'],
  'vue': ['vue', 'vuex'],
  'angular': ['ts', 'angular'],
  'javascript': ['js', 'javascript', 'es6'],
  'typescript': ['ts', 'typescript'],
  'html': ['html', 'htm'],
  'css': ['css', 'scss', 'sass', 'less', 'stylus'],
  'next.js': ['next', 'nextjs'],

  // Backend
  'node.js': ['node', 'express', 'npm', 'package.json'],
  'python': ['py', 'python', 'django', 'flask'],
  'java': ['java', 'spring', 'maven'],
  'php': ['php', 'laravel', 'symfony'],
  'go': ['go', 'golang'],
  'ruby': ['rb', 'ruby', 'rails'],
  'rust': ['rs', 'rust', 'cargo'],

  // Database
  'mongodb': ['mongo', 'mongodb'],
  'postgresql': ['postgres', 'postgresql'],
  'mysql': ['mysql'],
  'redis': ['redis'],

  // Tools & Others
  'docker': ['docker', 'dockerfile', 'docker-compose'],
  'kubernetes': ['k8s', 'kubernetes'],
  'aws': ['aws', 'amazon'],
  'firebase': ['firebase'],
  'graphql': ['graphql', 'gql'],
  'webpack': ['webpack'],
  'git': ['git', '.gitignore'],
};

export const detectTechnologies = (files = [], description = '') => {
  const detectedTech = new Set();
  const allText = description.toLowerCase() + ' ' + files.join(' ').toLowerCase();

  // Check for technology matches in file names and description
  Object.entries(techStack).forEach(([tech, keywords]) => {
    if (keywords.some(keyword => allText.includes(keyword.toLowerCase()))) {
      detectedTech.add(tech);
    }
  });

  // Additional common file extension checks
  files.forEach(file => {
    const ext = file.split('.').pop().toLowerCase();
    
    switch(ext) {
      case 'js':
        detectedTech.add('javascript');
        break;
      case 'ts':
        detectedTech.add('typescript');
        break;
      case 'py':
        detectedTech.add('python');
        break;
      case 'go':
        detectedTech.add('go');
        break;
      case 'rs':
        detectedTech.add('rust');
        break;
      case 'java':
        detectedTech.add('java');
        break;
      // Add more extensions as needed
    }
  });

  return Array.from(detectedTech);
}; 