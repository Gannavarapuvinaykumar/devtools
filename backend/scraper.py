import json

def scrape_and_save():
    tools = [
        {"name": "VS Code", "description": "Popular code editor from Microsoft", "category": "Editor", "link": "https://code.visualstudio.com/", "price": "Free"},
        {"name": "Postman", "description": "API testing and development platform", "category": "API", "link": "https://www.postman.com/", "price": "Freemium"},
        {"name": "GitHub", "description": "Code hosting platform for version control and collaboration", "category": "Collaboration", "link": "https://github.com/", "price": "Free"},
        {"name": "Git", "description": "Distributed version control system", "category": "Version Control", "link": "https://git-scm.com/", "price": "Free"},
        {"name": "Docker", "description": "Container platform for building, sharing, and running apps", "category": "DevOps", "link": "https://www.docker.com/", "price": "Free"},
        {"name": "Jenkins", "description": "Automation server for CI/CD", "category": "CI/CD", "link": "https://www.jenkins.io/", "price": "Free"},
        {"name": "Figma", "description": "Collaborative interface design tool", "category": "Design", "link": "https://www.figma.com/", "price": "Freemium"},
        {"name": "Slack", "description": "Team communication and collaboration platform", "category": "Collaboration", "link": "https://slack.com/", "price": "Freemium"},
        {"name": "Trello", "description": "Project management tool", "category": "Productivity", "link": "https://trello.com/", "price": "Freemium"},
        {"name": "Notion", "description": "All-in-one workspace for notes, tasks, and wikis", "category": "Productivity", "link": "https://www.notion.so/", "price": "Freemium"},
        {"name": "Sublime Text", "description": "Sophisticated text editor for code, markup and prose", "category": "Editor", "link": "https://www.sublimetext.com/", "price": "Paid"},
        {"name": "PyCharm", "description": "Python IDE by JetBrains", "category": "Editor", "link": "https://www.jetbrains.com/pycharm/", "price": "Paid"},
        {"name": "IntelliJ IDEA", "description": "Java IDE by JetBrains", "category": "Editor", "link": "https://www.jetbrains.com/idea/", "price": "Paid"},
        {"name": "WebStorm", "description": "JavaScript IDE by JetBrains", "category": "Editor", "link": "https://www.jetbrains.com/webstorm/", "price": "Paid"},
        {"name": "Bitbucket", "description": "Git solution for teams", "category": "Version Control", "link": "https://bitbucket.org/", "price": "Free"},
        {"name": "Jira", "description": "Agile project management tool", "category": "Productivity", "link": "https://www.atlassian.com/software/jira", "price": "Paid"},
        {"name": "CircleCI", "description": "Continuous integration and delivery platform", "category": "CI/CD", "link": "https://circleci.com/", "price": "Freemium"},
        {"name": "Travis CI", "description": "Continuous integration service", "category": "CI/CD", "link": "https://travis-ci.com/", "price": "Freemium"},
        {"name": "Heroku", "description": "Cloud platform for deploying apps", "category": "Cloud", "link": "https://www.heroku.com/", "price": "Freemium"},
        {"name": "Netlify", "description": "Platform for automating modern web projects", "category": "Cloud", "link": "https://www.netlify.com/", "price": "Freemium"},
        {"name": "Vercel", "description": "Frontend cloud platform", "category": "Cloud", "link": "https://vercel.com/", "price": "Freemium"},
        {"name": "AWS Cloud9", "description": "Cloud-based IDE from Amazon", "category": "Cloud", "link": "https://aws.amazon.com/cloud9/", "price": "Freemium"},
        {"name": "Google Cloud Platform", "description": "Suite of cloud computing services", "category": "Cloud", "link": "https://cloud.google.com/", "price": "Freemium"},
        {"name": "Azure DevOps", "description": "DevOps services for teams", "category": "DevOps", "link": "https://azure.microsoft.com/en-us/services/devops/", "price": "Freemium"},
        {"name": "Kubernetes", "description": "Container orchestration platform", "category": "DevOps", "link": "https://kubernetes.io/", "price": "Free"},
        {"name": "Swagger", "description": "API design and documentation platform", "category": "API", "link": "https://swagger.io/", "price": "Freemium"},
        {"name": "Insomnia", "description": "API design platform and client", "category": "API", "link": "https://insomnia.rest/", "price": "Freemium"},
        {"name": "npm", "description": "Package manager for JavaScript", "category": "Package Manager", "link": "https://www.npmjs.com/", "price": "Free"},
        {"name": "Yarn", "description": "Fast, reliable, and secure dependency management", "category": "Package Manager", "link": "https://yarnpkg.com/", "price": "Free"},
        {"name": "Webpack", "description": "Module bundler for JavaScript", "category": "Build Tool", "link": "https://webpack.js.org/", "price": "Free"},
        {"name": "ESLint", "description": "Pluggable JavaScript linter", "category": "Linting", "link": "https://eslint.org/", "price": "Free"}
    ]
    with open("data.json", "w") as f:
        json.dump(tools, f, indent=2)
