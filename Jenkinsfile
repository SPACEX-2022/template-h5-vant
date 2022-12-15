pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: GIT_BUILD_REF]],
          userRemoteConfigs: [[
            url: GIT_REPO_URL,
            credentialsId: CREDENTIALS_ID
          ]]])
        }
      }

      stage('安装依赖') {
        steps {
          sh 'pnpm install'
        }
      }

      stage('编译') {
        steps {
          sh 'npm run build'
        }
      }

      stage('压缩dist') {
        steps {
          sh 'tar -czvf dist.tar.gz dist'
        }
      }

      stage('部署') {
        steps {
          echo '部署中...'
          script {
            def remote = [:]
            remote.name = 'web-server'
            remote.allowAnyHosts = true
            remote.host = '1.116.228.121'
            remote.port = 22
            // remote.user = 'root'
            // remote.password = 'Dinglikeji--=='
            // 把「CODING 凭据管理」中的「凭据 ID」填入 credentialsId，而 id_rsa 无需修改
            withCredentials([sshUserPrivateKey(credentialsId: '2ed73c41-b9da-45b0-8833-bf939d88f941', keyFileVariable: 'id_rsa')]) {
              //remote.identityFile = id_rsa
              //sshCommand remote: remote, command: "ls -l"
              //def v='date "+%Y%m%d%H%M%S"'
              //老版本重命名
              //sshCommand remote: remote, sudo: true, command: "mv /root/workspace/dist.tar.gz /root/workspace/dist_${v}.tar.gz"
              // SSH 上传文件到远端服务器
              sshPut remote: remote, from: '/root/workspace/dist.tar.gz', into: '/root/'
              //删除旧目录
              sshCommand remote: remote, sudo: true, command: "rm -rf /home/work/nginx/web/guolian/fund-doctor/admin/*"

              sshCommand remote: remote, command: "tar -xvf dist.tar.gz"

              sshCommand remote: remote, command: "cp -r dist/ /home/work/nginx/web/guolian/fund-doctor/admin/"

              // sshCommand remote: remote, command: "nginx -s stop"

              // sshCommand remote: remote, command: "nginx"
            }

            // withCredentials([sshUserPrivateKey(credentialsId: "2ed73c41-b9da-45b0-8833-bf939d88f941", keyFileVariable: 'id_rsa')]) {
              //   remote.identityFile = id_rsa
              //   sshCommand remote: remote, command: "rm -rf /usr/local/jar/fund-doctor-war.jar"
              //   sshPut remote: remote, from: './war/target/fund-doctor-war.jar', into: '/usr/local/jar'
              //   sshCommand remote: remote, command: "sh /usr/local/jar/fund-doctor.sh restart"
              // }

              echo '部署完成'
            }

          }
        }

      }
    }