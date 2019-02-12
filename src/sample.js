export default data = [
  {
      "AmiLaunchIndex": 0,
      "ImageId": "ami-032509850cf9ee54e",
      "InstanceId": "i-098ccfdf338675885",
      "InstanceType": "t2.micro",
      "KeyName": "testkeypair",
      "LaunchTime": "2019-02-08T01:31:08.000Z",
      "Monitoring": {
          "State": "disabled"
      },
      "Placement": {
          "AvailabilityZone": "us-west-2b",
          "GroupName": "",
          "Tenancy": "default"
      },
      "PrivateDnsName": "ip-172-31-28-190.us-west-2.compute.internal",
      "PrivateIpAddress": "172.31.28.190",
      "ProductCodes": [],
      "PublicDnsName": "ec2-35-161-98-86.us-west-2.compute.amazonaws.com",
      "PublicIpAddress": "35.161.98.86",
      "State": {
          "Code": 16,
          "Name": "running"
      },
      "StateTransitionReason": "",
      "SubnetId": "subnet-7c034e19",
      "VpcId": "vpc-d2681ab7",
      "Architecture": "x86_64",
      "BlockDeviceMappings": [
          {
              "DeviceName": "\/dev\/xvda",
              "Ebs": {
                  "AttachTime": "2019-02-08T01:31:09.000Z",
                  "DeleteOnTermination": true,
                  "Status": "attached",
                  "VolumeId": "vol-0c4a0b0fb5bcedfef"
              }
          }
      ],
      "ClientToken": "",
      "EbsOptimized": false,
      "EnaSupport": true,
      "Hypervisor": "xen",
      "ElasticGpuAssociations": [],
      "ElasticInferenceAcceleratorAssociations": [],
      "NetworkInterfaces": [
          {
              "Association": {
                  "IpOwnerId": "amazon",
                  "PublicDnsName": "ec2-35-161-98-86.us-west-2.compute.amazonaws.com",
                  "PublicIp": "35.161.98.86"
              },
              "Attachment": {
                  "AttachTime": "2019-02-08T01:31:08.000Z",
                  "AttachmentId": "eni-attach-08713c39e3125bc9a",
                  "DeleteOnTermination": true,
                  "DeviceIndex": 0,
                  "Status": "attached"
              },
              "Description": "",
              "Groups": [
                  {
                      "GroupName": "launch-wizard-2",
                      "GroupId": "sg-0ac3d6ea0b496701e"
                  }
              ],
              "Ipv6Addresses": [],
              "MacAddress": "02:31:93:75:7e:d2",
              "NetworkInterfaceId": "eni-0a675aa06da907914",
              "OwnerId": "418200874674",
              "PrivateDnsName": "ip-172-31-28-190.us-west-2.compute.internal",
              "PrivateIpAddress": "172.31.28.190",
              "PrivateIpAddresses": [
                  {
                      "Association": {
                          "IpOwnerId": "amazon",
                          "PublicDnsName": "ec2-35-161-98-86.us-west-2.compute.amazonaws.com",
                          "PublicIp": "35.161.98.86"
                      },
                      "Primary": true,
                      "PrivateDnsName": "ip-172-31-28-190.us-west-2.compute.internal",
                      "PrivateIpAddress": "172.31.28.190"
                  }
              ],
              "SourceDestCheck": true,
              "Status": "in-use",
              "SubnetId": "subnet-7c034e19",
              "VpcId": "vpc-d2681ab7"
          }
      ],
      "RootDeviceName": "\/dev\/xvda",
      "RootDeviceType": "ebs",
      "SecurityGroups": [
          {
              "GroupName": "launch-wizard-2",
              "GroupId": "sg-0ac3d6ea0b496701e"
          }
      ],
      "SourceDestCheck": true,
      "Tags": [],
      "VirtualizationType": "hvm",
      "CpuOptions": {
          "CoreCount": 1,
          "ThreadsPerCore": 1
      },
      "HibernationOptions": {
          "Configured": false
      },
      "Licenses": []
  }
];