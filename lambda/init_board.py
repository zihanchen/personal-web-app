import json
import boto3
import uuid

def init_board(event, context):
    # initialize board
    board = []


    table_name = 'connect-four-boards'
    dynamodb = boto3.resource('dynamodb')
    uid = str(uuid.uuid4())
    table = dynamodb.Table(table_name)

    board_size = event['board_size']

    for i in range(board_size):
        board.append(['.'] * board_size)

    # put the table in the database
    table.put_item(
        Item={
            'uid': uid,
            'board': board
        }
    )
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!'),
        'board': board,
        'uid': uid
    }
